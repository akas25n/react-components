import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({to, children, className, activateClassName}){

    const {navigate, currentPath} = useNavigation();

    const classes = classNames('text-blue-500', className, currentPath === to && activateClassName);

    const handleClick = (event) =>{
        if(event.metaKey || event.ctrKey){
            return;
        }
        event.preventDefault();

        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleClick} >{children}</a>
}
export default Link;