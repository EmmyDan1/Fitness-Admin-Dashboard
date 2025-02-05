import PropTypes from "prop-types"; 

const SummaryCard = ({ icon, title, value, color, textColor, text }) => {
    return (
      <div className={`flex items-center p-4 ${color} ${textColor}  rounded-lg shadow-md`}>
        <div className="text-2xl mr-3">{icon}</div>
        <div>
          <p className="text-sm font-light">{title}</p>
          <p className="text-lg font-semibold">{value}</p>
          <p className="text-[9px]"> {text} </p>
        </div> 
      </div>
    );
  };

  SummaryCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    text: PropTypes.string,
  };

  SummaryCard.defaultProps = {
    textColor: "text-black",
  };

  export default SummaryCard