import React from "react";

const SmartEmailLink = ({ email, subject = "", label, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    try {
      window.location.href = mailtoURL;

      setTimeout(() => {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
          subject
        )}`;
        window.open(gmailURL, "_blank");
      }, 1500);
    } catch (error) {
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}`;
      window.open(gmailURL, "_blank");
    }
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={`text-decoration-none contact-link ${className}`}
      title={`Send an email to ${email}`}
    >
      <i className="bi bi-envelope-fill me-2" aria-hidden="true"></i>
      {label || email}
    </a>
  );
};

export default SmartEmailLink;
