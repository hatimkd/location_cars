import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function ProfileForm() {
  const userInfo = {
    username: "hatimm",
    email: "hatimm@gmail.com",
    first_name: "hatimm",
    last_name: "hatimm",
    is_staff: true,
    role: "admin",
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {[
              { id: "username", label: "Username", value: userInfo.username },
              { id: "first-name", label: "First name", value: userInfo.first_name },
              { id: "last-name", label: "Last name", value: userInfo.last_name },
              { id: "email", label: "Email address", value: userInfo.email, type: "email" },
              { id: "role", label: "Role", value: userInfo.role, disabled: true },
              { id: "is_staff", label: "Admin Status", type: "checkbox", checked: userInfo.is_staff, disabled: true },
            ].map(({ id, label, value, type, checked, disabled }) => (
              <div className="sm:col-span-4" key={id}>
                <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                  {label}
                </label>
                <div className="mt-2">
                  {type === "checkbox" ? (
                    <input
                      id={id}
                      name={id}
                      type={type}
                      checked={checked}
                      disabled={disabled}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  ) : (
                    <input
                      id={id}
                      name={id}
                      type={type || "text"}
                      defaultValue={value}
                      disabled={disabled}
                      autoComplete={id === "username" ? "username" : undefined}
                      className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
