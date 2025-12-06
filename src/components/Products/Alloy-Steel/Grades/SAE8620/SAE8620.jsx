import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const AlloySteelSAE8620 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "SAE 8620 / EN353 / SAE 9310",
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

export default AlloySteelSAE8620;
