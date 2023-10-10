import {Link} from 'react-router-dom';

const Button = (props) => {
    return (
        <div>
            <button
           
                id={props.id}
                type={props.type}
                onClick={()=>props.handleAction(true)}
                {...props}
                className={
                    props.isLight
                        ? `w-full inline-flex justify-center items-center px-4 py-2.5 text-white bg-titleclr rounded-md text-sm ${props.abc}`
                        : props.isBordered
                            ? `inline-flex justify-center items-center font-bold px-4 py-2.5 text-titleclr border border-titleclr rounded-md text-sm ${props.abc}`
                            : `w-full inline-flex justify-center items-center px-4 py-2.5 text-black bg-titleclr font-medium rounded-md ${props.abc}`
                }
            >
                {props.type === "submit" && <props.icon className="w-5 h-5 mr-1" />}
                {props.label}
                
            </button>

        </div>
    );
}

export default Button;