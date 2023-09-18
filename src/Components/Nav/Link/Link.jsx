import PropTypes from 'prop-types'; 

const Link = ({route}) => {
    return (
        <li className="mr-10 px-6 hover:bg-slate-700 text-2xl" > 
        <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes={
    route:PropTypes.object
}

export default Link;