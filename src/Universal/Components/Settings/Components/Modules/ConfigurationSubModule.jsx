import React from 'react';
import ConfigurationOptions from './ConfigurationOptions.jsx'


export default function ConfigurationSubModule({name, module, parent}) {
	const [ moduleArray, setModuleArray ] = React.useState(Object.entries(module))
	const [ moduleName, setModuleName ] = React.useState(name)


	const buildOptionSelector = (submodule) => {
		let result = false;

		if (submodule.length == 2 && submodule[1]?.options) {
			const builder = {
				name: submodule[0],
				list: submodule[1].options,
				selected:submodule[1].value,
				submodule: name,
				parentModule: parent
			}

			const options = submodule[1].options.length


			switch (true) {
				case options == 2:	// sets to input:checkbox
					builder.type = "checkbox"

					result = <ConfigurationOptions options={builder}/>
					

					break
				case options == 3 :	// sets to input:radio
					builder.type = "radio"
					result = <ConfigurationOptions options={builder}/>

					break
				case options > 3:	// sets to option
					builder.type = "dropdown"
					result = <ConfigurationOptions options={builder}/>
					break
				default:
					result = (false)
					break
			}

		}

		return result
	}



	const convertCamelToCapitalized = (inputStr) => {
    		// Add space before any uppercase letter that follows a lowercase letter or number
		const spacedStr = inputStr.replace(/([a-z0-9])([A-Z])/g, '$1 $2')

		// Capitalize the first letter
		const capitalizedStr = spacedStr.replace(/^./, match => match.toUpperCase());

		return capitalizedStr

	} 



	React.useEffect(()=>{
		if (moduleName) setModuleName(convertCamelToCapitalized(name)) 
	},[moduleArray])



	return (
		<section id={ `${name}-module` }
		className="w-full h-auto text-white border-t-2 border-b-2 border-t-[#555] border-b-[#555] border-opacity-50">
			<div className="py-[0.5rem]">
				<h3 id="module-title"
				className="font-semibold text-[1rem]">{moduleName}</h3>
				<ul className="list-disc space-y-[1rem] py-2 pl-[1.5rem]">
					{moduleArray && moduleArray.map( (sub,key) => {
						if (sub.length == 2) {
							const configTitle = convertCamelToCapitalized(sub[0])
							const configOptions = sub[1]
							const optionType = buildOptionSelector(sub)

							return (
								<li id=""
								className=""
								key={key}>
									<div id="config-opt" 
									className="flex justify-between mb-2">
										<h4 id="opt-title"
										className="font-bold text-[0.8rem]">{configTitle}</h4>

										{optionType}
									</div>

									<label id="opt-description"
									className="pl-2">
										{configOptions.description}
									</label>
								</li>
							)
						}
					})}
				</ul>
			</div>
		</section>
	)
}
