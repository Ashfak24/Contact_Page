import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { RiMessage2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";

function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}></div>
      <div className={styles.top_btn}>
        <Button
          text="VIA SUPPORT CHAT"
          icon={<RiMessage2Line fontSize="24px" />}
        />
        <Button text="VIA CALL" icon={<FiPhoneCall fontSize="24px" />} />
      </div>
      <Button
        isOutLine={true}
        text="VIA EMAIL FORM"
        icon={<HiOutlineMailOpen fontSize="24px" />}
      />
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </form>
      <div className={styles.contact_image}></div>
    </section>
  );
}

export default ContactForm;
