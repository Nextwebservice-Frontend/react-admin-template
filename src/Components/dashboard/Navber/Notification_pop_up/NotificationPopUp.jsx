import { HiOutlineMailOpen } from 'react-icons/hi'
import avater from '../../../../assets/avator.jpg'
import { RxCross1 } from 'react-icons/rx'

const NotificationPopUp = ({ showNotificationPopUp }) => {
    const NotificationData = [
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge ',
            time: '1h ego',
            status: 'unread',
        },
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge ',
            time: '1h ego',
            status: 'unread',
        },
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge ',
            time: '1h ego',
            status: 'unread',
        },
        {
            avater: avater,
            title: 'Congratulation Lettie 🎉',
            message: 'Won the monthly best seller gold badge Won the monthly best seller gold badge',
            time: '1h ego',
            status: 'read',
        },
    ]
    return (//${showNotificationPopUp ? "popup" : "hidden"}
        <div className={`absolute ${showNotificationPopUp ? "popup" : "hidden"} shadow-lg rounded-lg border lg:right-20 md:right-16 right-0 z-20 -top-12 mt-10 bg-white max-h-[90vh] overflow-y-auto`}>
            <span className='flex justify-between items-center min-w-80 max-w-80 sm:max-w-96 sm:min-w-96 text-lg p-3 text-gray-600 font-semibold opacity-70'>
                Notification
                <button>
                    <HiOutlineMailOpen className='text-2xl' />
                </button>
            </span>
            <div id='NotificationPopUp' className=' text-gray-500 flex justify-start min-w-80 max-w-80 sm:max-w-96 sm:min-w-96 items-start  flex-col  border-t max-h-[50vh] overflow-y-auto'>
                {NotificationData.map((item, index) =>
                    <div key={index} className='border-b w-full py-3 cursor-pointer notification relative hover:bg-slate-100'>
                        <div className='flex justify-start items-start gap-2 box-border px-2 w-full'>
                            <img className='w-10 h-10 rounded-full' src={item?.avater} alt="" />
                            <div>
                                <h3 className='text-base font-medium mb-1'>{item?.title}</h3>
                                <p className='pr-9'>{item?.message}</p>
                                <span className='text-xs font-semibold text-gray-500 opacity-70'>{item?.time}</span>
                            </div>
                        </div>
                        {
                            item?.status === 'unread' && <span className='absolute h-2 w-2 rounded-full bg-blue-600 top-5 right-7  '></span>
                        }
                        <button className='absolute right-6 top-9 text-lg cursor-pointer hidden removeNotification'>
                            <RxCross1 />
                        </button>
                    </div>)}
            </div>
            <div className='p-2'>
                <button className='block text-center w-full py-2 rounded-md text-blue-600 hover:bg-slate-100 text-base'>
                    View all notifications
                </button>
            </div>
        </div>
    )
}

export default NotificationPopUp