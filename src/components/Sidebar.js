import Link from "./Link";

function Sidebar(){

    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
    ];

    const renderedLinks = links.map((link) =>{
        return (
        <div key={link.label}>
            <Link  
            to={link.path} 
            className="mb-3"
            activateClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
            {link.label}
            </Link>
        </div>
        ); 
    });
    return (
        <div className="sticky top-0 frex flex-col items-start">
            {renderedLinks}
        </div>
    );
}
export default Sidebar;