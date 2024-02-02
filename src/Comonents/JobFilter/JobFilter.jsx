import { Button } from "@chakra-ui/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./slideStyles.css";

const JobFilter = ({
  handleSubmit,
  filterParams,
  setFilterParams,
  value,
  setValue,
  setFilterJobs,
}) => {
  const handleChange = (name, value) => {
    setFilterParams(params => ({ ...params, [name]: value }));
  };

  const handleCheckboxChange = (jobType, checked) => {
    const updatedJobTypes = checked
      ? [...filterParams.job_time, jobType]
      : filterParams.job_time.filter(type => type !== jobType);

    setFilterParams(params => ({ ...params, job_time: updatedJobTypes }));
  };

  const handleSliderChange = newValue => {
    setValue(newValue);
    setFilterParams(params => ({
      ...params,
      salaryRange: `${newValue[0]}-${newValue[1]}`,
    }));
  };

  const handleClearFilters = () => {
    setFilterParams({
      job_title: "",
      job_time: [],
      salaryRange: `${[0, 250000][0]}-${[0, 250000][1]}`,
    });
    setFilterJobs([]);
    setValue([0, 250000]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto my-10 flex flex-col w-full space-y-5 bg-white'
    >
      <div className='space-y-3'>
        <label className='text-lg font-medium block'>Job Title</label>
        <input
          autoFocus
          type='text'
          name='job_title'
          placeholder='Search Job'
          className='outline-none w-3/4 lg:w-full py-2 pl-2 rounded-full border border-orange-500'
          value={filterParams.job_title}
          onChange={e => handleChange("job_title", e.target.value)}
        />
      </div>

      <div className='lg:grid lg:grid-cols-2 items-center w-full space-y-3 space-x-2 md:space-x-4 lg:space-x-0'>
        <label className='lg:col-span-2 text-lg font-medium block'>
          Job Type
        </label>
        <label>
          <input
            type='checkbox'
            value='Intern'
            checked={filterParams.job_time.includes("Intern")}
            onChange={e => handleCheckboxChange("Intern", e.target.checked)}
            className='mr-1'
          />
          Intern
        </label>
        <label>
          <input
            type='checkbox'
            value='Full-time'
            checked={filterParams.job_time.includes("Full-time")}
            onChange={e => handleCheckboxChange("Full-time", e.target.checked)}
            className='mr-1'
          />
          Full-time
        </label>
        <label>
          <input
            type='checkbox'
            value='Remote'
            checked={filterParams.job_time.includes("Remote")}
            onChange={e => handleCheckboxChange("Remote", e.target.checked)}
            className='mr-1'
          />
          Remote
        </label>
        <label>
          <input
            type='checkbox'
            value='Part-time'
            checked={filterParams.job_time.includes("Part-time")}
            onChange={e => handleCheckboxChange("Part-time", e.target.checked)}
            className='mr-1'
          />
          Part-time
        </label>
        <label>
          <input
            type='checkbox'
            value='On-site'
            checked={filterParams.job_time.includes("On-site")}
            onChange={e => handleCheckboxChange("On-site", e.target.checked)}
            className='mr-1'
          />
          On-site
        </label>
        <label>
          <input
            type='checkbox'
            value='Hybrid'
            checked={filterParams.job_time.includes("Hybrid")}
            onChange={e => handleCheckboxChange("Hybrid", e.target.checked)}
            className='mr-1'
          />
          Hybrid
        </label>
      </div>
      <div className='md:flex gap-x-5 lg:flex-col w-full space-y-3 lg:space-y-5'>
        <div className='md:flex-1 space-y-3  w-3/4 md:w-full'>
          <label className='text-lg font-medium block'> Salary range </label>
          <RangeSlider
            min={0}
            max={250000}
            value={value}
            onInput={handleSliderChange}
            id='range-slider-gradient'
            step={1000}
          />
        </div>

        <div className='rounded-xl w-1/2 md:w-1/5 lg:w-full border gap-y-1 px-2 flex flex-col'>
          <label className='block'> </label>
          Min Salary
          <input
            type='text'
            name='salaryRange'
            className='outline-none text-center'
            value={`$ ${value[0]}`}
            readOnly
          />
        </div>
        <div className='rounded-xl w-1/2 md:w-1/5 lg:w-full border gap-y-1 px-2 flex flex-col'>
          <label className='block'> </label>
          Max Salary
          <input
            type='text'
            name='salaryRange'
            className='outline-none text-center'
            value={`$ ${value[1]}`}
            readOnly
          />
        </div>
      </div>

      <div className='flex space-x-5'>
        <Button type='submit' colorScheme='blue'>
          Apply Filters
        </Button>
        <Button type='button' variant='outline' onClick={handleClearFilters}>
          Clear Filters
        </Button>
      </div>
    </form>
  );
};

export default JobFilter;
