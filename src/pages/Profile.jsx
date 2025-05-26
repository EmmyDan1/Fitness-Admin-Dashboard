import { useState } from "react";
import mockUser from "../data/mockUser";
import Card from "../components/Common/Card";
import Button from "../components/Common/Button";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="p-6">
      <Card className="slide-up">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0">
            <img
              src={mockUser.avatar}
              alt="User"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900/50"
            />
          </div>

          <div className="flex-1 w-full">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">{mockUser.name}</h2>
              <Button
                onClick={() => setEditMode(!editMode)}
                variant={editMode ? "secondary" : "primary"}
                className="text-sm"
              >
                {editMode ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            {editMode ? (
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      defaultValue={mockUser.name}
                      className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={mockUser.email}
                      className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Height
                    </label>
                    <input
                      type="text"
                      defaultValue={mockUser.height}
                      className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Weight
                    </label>
                    <input
                      type="text"
                      defaultValue={mockUser.weight}
                      className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Age
                    </label>
                    <input
                      type="text"
                      defaultValue={mockUser.age}
                      className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-2"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="button" className="w-full">
                    Save Changes
                  </Button>
                </div>
              </form>
            ) : (
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="font-medium">{mockUser.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Member Since
                    </p>
                    <p className="font-medium">{mockUser.joinDate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Height
                    </p>
                    <p className="font-medium">{mockUser.height}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Weight
                    </p>
                    <p className="font-medium">{mockUser.weight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Age
                    </p>
                    <p className="font-medium">{mockUser.age}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
