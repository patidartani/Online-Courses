// Team.jsx
import Header from "../../pages/top-banner/Header";
import OurTeam from "../../components/team/OurTeam";

const fullTeam = [
  {
    name: "Priya Sharma",
    role: "Principal",
    img: "https://img.freepik.com/premium-photo/portrait-teacher-blackboard-classroom_85574-12172.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Amit Verma",
    role: "Assistant Teacher",
    img: "https://img.freepik.com/free-photo/smiling-showing-one-male-teacher-wearing-glasses-holding-number-fans-sitting-table-with-school-tools-classroom_141793-114349.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Neha Mehta",
    role: "Counselor",
    img: "https://img.freepik.com/free-photo/pleased-showing-thumbs-up-young-female-teacher-sitting-table-with-school-tools-classroom_141793-114419.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Riya Kapoor",
    role: "Math Teacher",
    img: "https://img.freepik.com/free-photo/smiling-young-female-teacher-standing-front-blackboard-holding-stranded-board-showing-thumb-up-classroom_141793-106344.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Arjun Mehta",
    role: "Science Teacher",
    img: "https://images.pexels.com/photos/5427832/pexels-photo-5427832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ravi Chauhan",
    role: "Sports Coach",
    img: "https://img.freepik.com/premium-photo/coach-giving-team-talk-elementary-school-basketball-team_605022-47363.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Kavita Singh",
    role: "English Teacher",
    img: "https://img.freepik.com/free-photo/young-english-teacher-doing-her-class-online_23-2149019783.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Deepak Joshi",
    role: "Music Teacher",
    img: "https://img.freepik.com/premium-photo/teacher-playing-guitar-while-leading-students-music-activity_1324785-116542.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Anita Rao",
    role: "Librarian",
    img: "https://img.freepik.com/free-photo/young-beautiful-business-woman-glasses-sits-work-table_1153-9278.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
];


const Team = () => {
  return (
    <>
      <Header title="Our Team" breadcrumb="Our Team" />
      <OurTeam teamMembers={fullTeam} />
    </>
  );
};

export default Team;
