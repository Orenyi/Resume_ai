import React, { useEffect } from "react";
import { FiAlertCircle, FiCheckCircle, FiX } from "react-icons/fi";
import useToastStore from "../store/toastStore";

const Toast = () => {
  const { toast, hideToast } = useToastStore();

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      hideToast();
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast, hideToast]);

  if (!toast) return null;

  const isError = toast.type === "error";

  return (
    <div className="fixed top-5 right-4 left-4 sm:left-auto z-[9999]">
      <div
        className={`mx-auto sm:mx-0 max-w-md rounded-3xl border bg-white p-4 shadow-2xl ${
          isError ? "border-red-100" : "border-green-100"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
              isError ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
            }`}
          >
            {isError ? <FiAlertCircle /> : <FiCheckCircle />}
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-slate-900">{toast.title}</h3>

            <p className="mt-1 text-sm leading-relaxed text-slate-500">
              {toast.message}
            </p>
          </div>

          <button
            onClick={hideToast}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <FiX />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
