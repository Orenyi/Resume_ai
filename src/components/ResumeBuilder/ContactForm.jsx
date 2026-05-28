import React from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";
import { supabase } from "../../lib/supabaseClient";
import photoUploadService from "../../services/photoUploadService";
import useToastStore from "../../store/toastStore";

const ContactForm = () => {
  const { resumeData, updatePersonal } = useResumeBuilderStore();
  const { showToast } = useToastStore();

  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Simon Otaru",
    },
    {
      name: "jobTitle",
      label: "Job Title",
      type: "text",
      placeholder: "Frontend Developer",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "simon@email.com",
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "+234 000 000 0000",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "Abuja, Nigeria",
    },
    {
      name: "website",
      label: "Portfolio Website",
      type: "url",
      placeholder: "https://yourwebsite.com",
    },
    {
      name: "linkedin",
      label: "LinkedIn",
      type: "url",
      placeholder: "https://linkedin.com/in/username",
    },
  ];

  const MAX_FILE_SIZE = 500 * 1024; // 500KB

  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) return;

      if (file.size > MAX_FILE_SIZE) {
        showToast({
          type: "error",
          title: "Image too large",
          message: "Please upload a JPG, PNG, or WEBP image below 500KB.",
        });
        return;
      }

      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

      if (!allowedTypes.includes(file.type)) {
        showToast({
          type: "error",
          title: "Invalid image type",
          message: "Only JPG, PNG, and WEBP images are supported.",
        });
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const photoUrl = await photoUploadService.uploadProfilePhoto(
        file,
        user.id,
      );

      updatePersonal("photoUrl", photoUrl);
      showToast({
        type: "success",
        title: "Photo uploaded",
        message: "Your profile photo has been uploaded successfully.",
      });
    } catch (error) {
      console.log("Photo upload error:", error.message);
      showToast({
        type: "error",
        title: "Upload failed",
        message: "Please try again or choose a smaller image.",
      });
    }
  };
  return (
    <section className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Contact</h2>
        <p className="mt-2 text-slate-500">
          Add your personal details and profile image.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-5">
        <div className="h-24 w-24 rounded-full bg-slate-100 border border-gray-200 overflow-hidden flex items-center justify-center">
          {resumeData.personal.photoUrl ? (
            <img
              src={resumeData.personal.photoUrl}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm text-slate-400">Photo</span>
          )}
        </div>

        <div>
          <label className="group inline-flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:bg-blue-50 hover:text-[var(--color-primary)]">
            Upload Photo
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <p className="mt-2 text-sm text-slate-400">
            JPG, PNG or WEBP. Max size: 500KB.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.name === "fullName" ? "md:col-span-2" : ""}
          >
            <label className="text-sm font-semibold text-slate-700">
              {field.label}
            </label>

            <input
              type={field.type}
              value={resumeData.personal[field.name]}
              onChange={(e) => updatePersonal(field.name, e.target.value)}
              placeholder={field.placeholder}
              className="mt-2 h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 outline-none transition focus:border-[var(--color-primary)] focus:bg-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactForm;
