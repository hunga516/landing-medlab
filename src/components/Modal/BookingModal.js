import { useState } from "react";

function NavigateModal({toggleIsShowBookingModal}) {
    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            toggleIsShowBookingModal();
        }
    }

    return (
        <div className="modal fixed inset-0 bg-slate-100/50 z-20 mt-11" onClick={closeModal}>
            <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg grid grid-cols-2 max-w-[900px] bg-white">
                <div className="">
                    <h1 className="text-3xl font-semibold leading-10">Đặt lịch ngay – Chăm sóc sức khỏe của bạn từ hôm nay!</h1>
                </div>
                <div className="">
                    <input type="text" className="px-4 py-1 rounded-lg ring ring-slate-200/70" placeholder="Nhap ten cua ban" />
                    <input type="date" name="date" id="" />
                </div>
            </div>
        </div>
    )
}

export default NavigateModal