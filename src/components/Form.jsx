import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";

const Form = ({ setCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];
  // Utilizar customHook
  const [category, NewsSelect] = useSelect("general", OPTIONS);

  // Submit
  const searchNews = (e) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Find news about some categories</h2>
          <NewsSelect />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

/* Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
}; */

Form.propTypes = { setCategory: PropTypes.func.isRequired };

export default Form;
