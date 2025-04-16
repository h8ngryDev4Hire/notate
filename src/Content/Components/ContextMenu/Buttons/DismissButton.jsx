import React from 'react';
import { ContextMenuHoverRegionContext } from '@content/Components/HoverRegions/ContextMenuHoverRegion.jsx';
import { WebContentContext } from '@content/content.jsx';
import { Power, RefreshCw, Globe, Computer, ArrowLeft } from 'lucide-react';
import { 
    dismissForSite, 
    dismissForSession 
} from './dismissUtils.js';

export default function DismissButton() {
    const { CONTEXT_MENU_CONTEXT } = React.useContext(ContextMenuHoverRegionContext);
    const [ contextMenuState, setContextMenuState ] = CONTEXT_MENU_CONTEXT;
    const { 
        DARK_MODE_CONTEXT,
        USER_CONFIGURATION_DB_CONTEXT,
        REQUEST_CONTEXT,
        MENU_DISMISSED_CONTEXT
    } = React.useContext(WebContentContext);
    
    const [ isDark ] = DARK_MODE_CONTEXT;
    const [ database ] = USER_CONFIGURATION_DB_CONTEXT;
    const [ , makeRequest ] = REQUEST_CONTEXT;
    const [ , setIsMenuDismissed ] = MENU_DISMISSED_CONTEXT;
    
    const [showExtraButtons, setShowExtraButtons] = React.useState(false);
    const [isRevealed, setIsRevealed] = React.useState(false);
    const [hoverText, setHoverText] = React.useState("");
    const [isTextVisible, setIsTextVisible] = React.useState(false);
    
    // Reset extra buttons when context menu is hidden
    React.useEffect(() => {
        if (!contextMenuState && showExtraButtons) {
            setShowExtraButtons(false);
            setIsTextVisible(false);
        }
    }, [contextMenuState]);
    
    const handleDismissClick = () => {
        setShowExtraButtons(!showExtraButtons);
    };
    
    // Dismissal handlers
    const handleDismissUntilReload = () => {
        // Just hide the menu UI without setting the global dismissed state
        setIsMenuDismissed(true);
    };
    
    const handleDismissForSite = async () => {
        const currentSite = window.location.hostname;
        
        // First update the UI immediately
        setContextMenuState(false);
        setIsMenuDismissed(true);
        
        // Use session storage instead of database storage
        dismissForSession();
    };
    
    const handleDismissForSession = () => {
        // First update the UI immediately
        setContextMenuState(false);
        setIsMenuDismissed(true);
        
        // Then update the session storage
        dismissForSession();
    };
    
    const ExtraButton = ({ icon, title, onClick }) => {
        return (
            <button 
                className={`
                    trans-ease-all btn-round-icon bg-zinc-800 hover:bg-zinc-700
                    flex flex-col items-center justify-center
                `}
                title={title}
                onClick={onClick}
                onMouseOver={() => {
                    setHoverText(title);
                    setIsTextVisible(true);
                }}
                onMouseLeave={() => {
                    setIsTextVisible(false);
                }}
            >
                <span className="size-[100%] flex items-center justify-center">
                    {icon}
                </span>
            </button>
        );
    };
    
    return (
        <div className="relative">
            {/* Extra buttons that appear when dismiss button is clicked */}
            <div 
                className={`
                    absolute right-full mr-2 flex items-center space-x-2 
                    transition-all duration-300 ease-in-out
                    ${showExtraButtons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}
                `}
            >
                {/* Shared hover text that shows at the left end of the row */}
                <div 
                    className={`
                        trans-ease-all absolute -left-32 font-bold 
                        z-10 text-center flex items-center justify-end
                        min-h-[1rem] min-w-[8rem] max-w-[8rem]
                        ${isTextVisible ? "opacity-100" : "opacity-0"}
                        ${isDark ? "text-slate-200" : "text-black"}
                    `}
                >
                    {hoverText}
                </div>
                
                <ExtraButton 
                    icon={<RefreshCw className="size-[50%] text-white" />}
                    title="Until Page Reload"
                    onClick={handleDismissUntilReload}
                />
                <ExtraButton 
                    icon={<Globe className="size-[50%] text-white" />}
                    title="For This Site"
                    onClick={handleDismissForSite}
                />
                <ExtraButton 
                    icon={<Computer className="size-[50%] text-white" />}
                    title="For This Session"
                    onClick={handleDismissForSession}
                />
            </div>
            
            {/* Main dismiss button */}
            <button
                id="context-dismiss-btn"
                className={`
                    trans-ease-all btn-round-icon bg-zinc-800 hover:bg-zinc-700
                    flex flex-col items-center justify-center
                `}
                onClick={handleDismissClick}
                onMouseOver={() => setIsRevealed(true)}
                onMouseLeave={() => setIsRevealed(false)}
            >
                <span className="size-[100%] flex items-center justify-center">
                    {showExtraButtons ? 
                        <ArrowLeft className="size-[50%] text-white" /> : 
                        <Power className="size-[50%] text-white" />
                    }
                </span>
                
                <label 
                    className={`
                        trans-ease-all absolute font-bold 
                        z-[-1] text-center ${isRevealed 
                        ? "-translate-x-[75%] opacity-100" 
                        : "translate-x-[0%] opacity-0"}
                        min-h-[1rem] min-w-[9rem]
                        ${isDark ? "text-slate-200" : "text-black"}
                    `}
                >
                    {showExtraButtons ? "" : "Dismiss Menu"}
                </label>
            </button>
        </div>
    );
} 