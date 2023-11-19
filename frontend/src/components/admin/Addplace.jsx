import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useState } from "react";

const AddplaceSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Min. 4 characters req.")
    .required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Addplace = () => {
  const navigate = useNavigate();

  const [selFile, setSelFile] = useState('');

  // initialize the formik
  const addplaceForm = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      address: "",
      createdAt: new Date(),
    },
    onSubmit: async (values, { setSubmitting }) => {
      values.avatar = selFile;
      setSubmitting(true);

      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);

      // send the data to the server

      const res = await fetch("http://localhost:5000/place/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "You have added place successfully",
        })
          .then((result) => {
            // navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Something went wrong",
        });
      }
    },
    // validationSchema: SignupSchema,
  });

  const uploadFile = async (e) => {
    if(!e.target.files) return;

    const file = e.target.files[0];
    console.log(file.name);
    setSelFile(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);

  }

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{duration: 0.3, stiffness: 100, type: 'spring', damping: 4}}
    >
      <div className="col-md-4 mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={addplaceForm.handleSubmit}>
              <h3 className="text-center">Addplace Form</h3>
              <hr />

              <label>Name</label>

              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {addplaceForm.touched.name && addplaceForm.errors.name}
              </span>

              <input
                type="text"
                className="form-control mb-4"
                name="name"
                onChange={addplaceForm.handleChange}
                value={addplaceForm.values.name}
              />

              <label>description</label>
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {addplaceForm.touched.email && addplaceForm.errors.email}
              </span>
              <textarea
                className="form-control mb-4"
                name="text"
                onChange={AddplaceForm.handleChange}
                value={AddplaceForm.values.description}
              />

              <label>Address</label>
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
              </span>
              <textarea
                type="text"
                className="form-control mb-4"
                name="text"
                onChange={addplaceForm.handleChange}
                value={addplaceForm.values.text}
              />

              <input type="file" onChange={uploadFile} />

              <button
                disabled={signupForm.isSubmitting}
                type="submit"
                className="btn btn-primary mt-5 w-100"
              >
                {addPlaceForm.isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span>Loading ...</span>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddPlace;
