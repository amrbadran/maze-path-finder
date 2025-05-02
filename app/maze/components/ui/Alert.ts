import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function showAlert(title: string, message: string, icon: any) {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: title,
    text: message,
    icon: icon,
    confirmButtonText: "OK",
    buttonsStyling: false,

    customClass: {
      confirmButton: `
                   px-8 py-3 border outline-0 rounded-lg font-medium text-md
           bg-gradient-to-tl transition duration-200 ease-in-out
           cursor-pointer
           focus:outline-none focus:ring-2 focus:ring-[#885d40] focus:ring-opacity-50`,
    },
  });
}
