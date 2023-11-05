import Category from "../Category/Category";
import PropTypes from 'prop-types';


const Categories = ({ allJobs }) => {

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    allJobs.map(job => <Category key={job._id} job={job}></Category>)
                }

            </div>
        </div>
    );
};

Categories.propTypes = {
    allJobs: PropTypes.array.isRequired
}

export default Categories;