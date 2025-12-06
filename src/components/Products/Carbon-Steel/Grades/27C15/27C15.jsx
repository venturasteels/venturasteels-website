import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const CarbonSteel27C15 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "27C15 / SAE 1527",
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

export default CarbonSteel27C15;
