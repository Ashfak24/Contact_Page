import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { RiMessage2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";

function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
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
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/service.png" alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
