const crx = require('crx')
const fs = require('fs')
const path = require('path')


const privateKeyPath = path.resolve('', 'notate.pem')
const crxPath = path.resolve('bin', 'Notate.crx')
const buildOutputPath = path.resolve('dist')

console.log('path: ',  buildOutputPath)

const ChromeExtension = new crx({
	privateKey: fs.readFileSync(privateKeyPath)
})


ChromeExtension.load(buildOutputPath)
	.then( crx => crx.pack() )
	.then(buffer => {
		fs.writeFile(crxPath, buffer, (error) => {
			if (error) throw error

			console.log('CRX build completed with no errors.')
		})
	})
	.catch( error => {
		console.error('Error in CRX Build Process: ', error)
	})

