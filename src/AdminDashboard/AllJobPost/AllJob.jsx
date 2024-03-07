import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Button,
  } from "@chakra-ui/react";
  import { DeleteIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";

const AllJob = ({job,refetch}) => {
    const axiosSecure=UseAxiosSecure()
    const {_id,job_title,company_name,company_logo,job_role,hiring_manager_name,hiring_manager_email,job_posting_date}=job
    // ,,salary,job_time,skills,job_description,hiring_manager_name,hiring_manager_photo,hiring_manager_email,responsibilities,benefits,qualification,job_posting_date,user_email,job_location
    console.log(job)
    const handleDelete=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }) 
        .then((result) => {
            if (result.isConfirmed) {
    
                axiosSecure.delete(`/staticjobpost/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                     
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
             <Card
        direction={{ base: "column", md: "row" }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
           height="full"
           width="150px"
          src={
            company_logo
              ? company_logo
              : "https://i.ibb.co/fkw93z8/Hire-Master-Logo-2.png"
          }
          alt='news image'
        />

        <Stack>
          <CardBody>
            <Heading size='lg'>{job_title}</Heading>

            <Text py='2' className='text-[#FF3811]'>{company_name}</Text>
            <Text py='2'> <span className="font-serif font-semibold text-sm">Role:</span>{job_role}</Text>
            <Text py='2'><span className="font-serif font-semibold text-sm">Hiring Manager Name:</span>{hiring_manager_name}</Text>
            <Text py='2'><span className="font-serif font-semibold text-sm">Hiring Manager Email:</span>{hiring_manager_email}</Text>
            <Text py='2'><span className="font-serif font-semibold text-sm">Date:</span>{job_posting_date}</Text>
            
          </CardBody>

          <CardFooter gap={5}>
         <Link to={`/AdminDashboard/job_details_admin/${_id}`} >
         <Button
            
            colorScheme='red'
            variant='solid'
          >
           <CgDetailsMore />
          View Details
          </Button></Link>
            <Button
              onClick={() => handleDelete(_id)}
              colorScheme='red'
              variant='solid'
            >
              <DeleteIcon marginRight={1} />
              Delete Job
            </Button>
          </CardFooter>
        </Stack>
      </Card>
        </div>
    );
};

export default AllJob;