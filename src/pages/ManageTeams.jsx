import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { ManageCategoriesData } from "@/lib/data";
import { FiPlus } from "react-icons/fi";
import CategoriesTableContainer from "@/components/CategoriesTableContainer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ManageTeams() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(ManageCategoriesData); // Default data is the full data

  function handleSearchChange(e) {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // If search term is empty, display all data; otherwise, filter
    if (newSearchTerm.trim() === "") {
      setFilteredData(ManageCategoriesData);
    } else {
      const filtered = ManageCategoriesData.filter((item) =>
        item.name.toLowerCase().includes(newSearchTerm.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  }

  function handleKeyPressEvent(event) {
    if (event.key === "Enter") {
      // If search term is empty, show all data
      if (searchTerm.trim() === "") {
        setFilteredData(ManageCategoriesData);
      }
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle the form submit logic here
    console.log(formData);
  };

  return (
    <div className="space-y-10 px-6 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-700">Manage Teams</h3>
        <div className="flex h-11 w-4/12">
          <div className="relative flex h-11 w-5/6 items-center justify-between pr-4">
            <Input
              type="text"
              placeholder="Search Name"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPressEvent}
              className="h-full min-w-full border-none bg-gray-100 outline-none ring-1 ring-gray-300 transition duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-0 focus:ring-indigo-600"
            />
            <IoIosSearch
              className="absolute right-4 h-full w-12 rounded-r-md bg-indigo-600 p-2 text-3xl text-white"
              onClick={() => {
                if (searchTerm.trim() === "") {
                  setFilteredData(ManageCategoriesData); // Reset data when search is empty
                }
              }}
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex cursor-pointer items-center space-x-2 text-nowrap rounded-sm border border-indigo-500 p-2 text-indigo-500 hover:bg-indigo-600 hover:text-white">
                <FiPlus />
                <span className="">Add New</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>
                  Enter the details for the new category.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter category name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    name="slug"
                    placeholder="Enter category slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                  />
                  <p className="text-sm text-red-500">Spaces are not allowed</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="icon">Icon *</Label>
                  <Input
                    id="icon"
                    name="icon"
                    placeholder="Enter category icon"
                    value={formData.icon}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Submit
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-white">
        <CategoriesTableContainer
          data={filteredData}
          type="categories"
          rowsPerPage={15}
        />
      </div>
    </div>
  );
}
