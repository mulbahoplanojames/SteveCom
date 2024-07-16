import AllHero from "../../Components/All_Hero/AllHero";
import ContactUsCard from "../../Components/ContactUs_Cards/ContactUsCard";
import ContactUsForm from "../../Components/ContactUs_Form/ContactUsForm";
import FAQ from "../../Components/FAQ/FAQ";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const ContactUs = () => {
  return (
    <div>
      <AllHero title="Contact Us" text="Contact Us" />
      <ContactUsCard />
      <ContactUsForm />
      <FAQ />
      <NewsLetter />
    </div>
  );
};

export default ContactUs;
