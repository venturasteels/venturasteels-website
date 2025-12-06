import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const AlloySteelEN24 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "EN 24 / 18CrNiMo6",
        selectedProduct: "Alloy Steel",
      },
    });
  };
  return (
    <>
      <UnderConstruction />
      <div className="d-flex justify-content-center mb-5">
        <button
          onClick={handleEnquiryClick}
          className="btn btn-enquiry mt-3 mx-auto "
        >
          Enquire Now
        </button>
      </div>
    </>
  );
};

export default AlloySteelEN24;
