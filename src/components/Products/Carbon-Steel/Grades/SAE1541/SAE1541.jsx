import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const CarbonSteelSAE1541 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1541 / EN 15",
        selectedProduct: "Carbon Steel",
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

export default CarbonSteelSAE1541;
