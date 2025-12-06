import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const AlloySteelEN41B = () => {
   const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "EN 41B / 41CrV4 / AISI 4340 / 40NiCrMo84",
        selectedProduct: "Alloy Steel",
      },
    });
  };
  return (
    <>
      <UnderConstruction />
      <div className="d-flex justify-content-center mb-5">
        <button onClick={handleEnquiryClick} className="btn btn-enquiry mt-3 mx-auto ">
          Enquire Now
        </button>
      </div>
    </>
  );
};

export default AlloySteelEN41B;
