import EventCard from "./eventCard";

const EventList = () => {
    return ( 
        <section className="px-40 py-10">
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden">
            {/* {Array(9).fill(
              <EventCard title={"Mừng Tết Nguyên đán Giáp Thìn 2024, giảm giá lên đến 50%"} summary={"Từ 01/01/2024 , Nhang Đức Tuấn đón Tết Nguyên đán Giáp Thìn 2024, giảm giá tất cả mặt hàng đối với các đơn hàng trên 50.000 đồng."} image={"/images/SuKien.png"} public_date={}/>
            )} */}
          </div>
        </section>
      );
}

export default EventList