import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const CarbonSteelSAE1117 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 1117 / ASTM A108",
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

export default CarbonSteelSAE1117;
