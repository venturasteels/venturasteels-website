import { useNavigate } from "react-router-dom";
import UnderConstruction from "../../../../UnderConstruction";

const AlloySteel41Cr4 = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "41Cr4 / EN18 / 40Cr4B",
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

export default AlloySteel41Cr4;
