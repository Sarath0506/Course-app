import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, liked, setLiked }) {

    function clickHandler() {
        if (liked.includes(course.id)) {
            setLiked((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like removed");
        } else {
            setLiked((prev) => [...prev, course.id]);
            toast.success("Liked successfully");
        }
    }

    return (
        <div className='bg-gray-950 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt} />
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {liked.includes(course.id) ? (
                            <FcLike fontSize="1.75rem" />
                        ) : (
                            <FcLikePlaceholder />
                        )}
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {course.description.length > 100
                        ? `${course.description.substr(0, 100)}...`
                        : course.description}
                </p>
            </div>
        </div>
    );
}

export default Card;
