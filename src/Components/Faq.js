import "./Faq.css"
import Topcase from './Topcase';
import FaqQuestion from '../utils/FaqQuestion';
function Faq() {

    return (
        <>
            <Topcase heading={"Frequently asked questions"} content={" We tried to club some general querries asked by the students of NIT jalandhar. We hope you find them useful."} />
            <div className="FAQ__container">
                <FaqQuestion
                    question={"What are the timings of library?"}
                    answer={" Library timings: 9.00 AM to 9.00 PM ( 9.00 AM till 12.00 midnight during examinations)."}
                />
                <FaqQuestion
                    question={"Can we move in/out of the campus any time?"}
                    answer={"Yes. You live in a free country and a free campus. You are free to move in and out whenever you wish to. But not after 10 PM and 8 PM for girls, entry/exit is only through Main Gate."}
                />
                <FaqQuestion
                    question={"Are girls allowed in boys hostel? and vice-versa?"}
                    answer={"No. NIT Jalandhar is one of the strictest institutes in India when it comes to this. No girl can enter beyond the visitor's room in a boy's hostel and vice-versa."}
                />
                <FaqQuestion
                    question={"When can we apply for department change?"}
                    answer={"At the end of 1st year, after the end-sem exams, the forms are released in the internal web. You will be notified about it."}
                />
                <FaqQuestion
                    question={"Canteens/restaurants in/near the campus?"}
                    answer={"Yes we have 24 hour open restaurent named snacker near BH-1 and a night canteen, campus cafe and some more cafe's in campus."}
                />
                <FaqQuestion
                    question={"What are the timings of bus?"}
                    answer={"0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl"}
                />
                <FaqQuestion
                    question={"How to reach NIT campus?"}
                    answer={"Their are pletny of transportation facilites available in jalandhar city. You can book ola, uber, auto anything. It hardly costs 100-300 rs to reach NIT jalandhar campus."}
                />
                <FaqQuestion
                    question={"How can I be allowed to stay in hostel during vacations?"}
                    answer={"Students are not allowed to stay in hostel during vacations unless they have beforehand informed the warden/care-taker about their stay. They will be permitted only in case they are doing a course/ project/internship within the binding of the institute."}
                />
                <FaqQuestion
                    question={"Am I allowed to bring my bike/car to campus?"}
                    answer={"No. No student residing within the campus is allowed to use a motorised vehicle(Not even a moped) within the campus. It would result in the immediate cancellation of the hostel seat, strict disciplinary action and a fine of Rs. 5000(for 2-wheelers) and Rs.10000(for 4-wheelers). Too much for a vehicle. Go Green. Go cycling."}
                />
                <FaqQuestion
                    question={"What Medical facilities are available near the campus?"}
                    answer={"NITJ provides medical facilities in campus itself behind the IT building. If facilities are insufficient here, you are referred to nearby hospital. Ambulance is available on campus anytime. Just contact the nearest security guard and he will make sure the ambulance is right there within no time. Do not worry about the hospital fee as it is covered by your Medical Insurance."}
                />
                <FaqQuestion
                    question={"What to do if I-Card is lost ?"}
                    answer={"Firstly you should file a F.I.R and then apply for new I-card with a copy of F.I.R, new I-card will be issued with a fine of 500 rs."}
                />
                <FaqQuestion
                    question={"Nearby movie theatres"}
                    answer={"Their are plenty of theaters in jalandhar city, but near NITJ campus only one theater which is Sarb complex is present."}
                />
                <FaqQuestion
                    question={"Where to get pens, registers, calculators and lab coats from?"}
                    answer={"Their is a general purpose and stationary store near dispensary. You can get all these items there."}
                />
                <FaqQuestion
                    question={" Where to go for books?"}
                    answer={"You can either get books from library or from the stationary shop present in campus."}
                />
                <FaqQuestion
                    question={" Where to get things like soap shampoo etc from ?"}
                    answer={"Near night canteen you can get the daily routine items and zerox is also availabe there."}
                />
                <FaqQuestion
                    question={" How to get a medical booklet and what is the use of it?"}
                    answer={"Administration will inform you about the distribution of medical booklets, then you have to collect it from the informed outlet."}
                />
                <FaqQuestion
                    question={"What is a medical certificate, what is the use and how to get it?"}
                    answer={"It is a proof signed by the doctor of the medical reason of your leave. If you have a medical certificate, then you can be allowed to give reminors and remajors only. To get it, go to the iitd hospital that day only and get it checked by the doctor."}
                />
                <FaqQuestion
                    question={"Are we allowed to go anywhere in the IIT campus?"}
                    answer={"Yes, you are allowed to go anywhere with your ID card. Except anywhere risky, or if restricted then not allowed."}
                />
                <FaqQuestion
                    question={"Can 1st year students go out of their hostels ?"}
                    answer={"No, you can only go out of your hostel within the hostel timings and you cant leave the campus without filling leave form. If you have no local gaurdians then you cant go out of the campus. These rules are for your safety and will get flexible after your freshers and senior interaction."}
                />
                <FaqQuestion
                    question={"When will fresher's party is organized ?"}
                    answer={"It is generally organized in mid october but depends on your seniors."}
                />
                <FaqQuestion
                    question={"How can we access wifi in college campus ?"}
                    answer={"All hostels in NIT jalandhar have LAN connection and their is an open wifi available near IT building."}
                />
            </div>
        </>
    )
}

export default Faq