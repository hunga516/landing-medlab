import images from "../assets/images"
import { FaHeart, FaCommentDots, FaBookmark, FaShare } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import video from "../assets/video";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { loadingContext } from "../App";
import { LoadingContext } from "../context";

function HomePage() {

    const LoadingContextValue = useContext(LoadingContext)

    const ACTION_ITEMS = [
        {
            icon: FaHeart,
            title: '',
            data: {
                count: 555.6
            }
        },
        {
            icon: FaCommentDots,
            title: '',
            data: {
                count: 33.2
            }
        },
        {
            icon: FaBookmark,
            title: '',
            data: {
                count: 500
            }
        },
        {
            icon: FaShare,
            title: '',
            data: {
                count: 1237
            }
        }
    ]


    return (
       <div className="w-full">
           <div className="grid grid-cols-3">
               <div className="">
                   <h1 className="text-sky-800 font-bold text-8xl leading-[80px] text-left">Xét nghiệm chính xác, bảo vệ sức khỏe</h1>
               </div>
               <div className=""></div>
           </div>
       </div>
    )
}

export default HomePage