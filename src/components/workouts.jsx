  import ChestImg from "../assets/chestImg.jpg";
  import BackImg from "../assets/backImg.jpg";
  import PushUpImg from "../assets/pushUpImg.jpg";
  import FullBody from "../assets/fullBodyImg.jpg";

  const workOutInfoArray = [
    {
      image: ChestImg,
      title: "Chest Sculpting",
      bodyPart: "Chest",
      reps: "15 reps",
    },
    {
      image: BackImg,
      title: "Back Workout",
      bodyPart: "Lower Back",
      reps: "10 reps",
    },
    {
      image: PushUpImg,
      title: "Push Ups",
      bodyPart: "Upper Body",
      reps: "10 reps",
    },
    {
      image: FullBody,
      title: "Full Body Workout",
      bodyPart: "Full Body",
      reps: "30 reps",
    },
  ];

  const bodyPartColors = {  
    Chest: "#32CD32",  
    "Lower Back": "#FFA500", 
    "Full Body": "#86a0ff", 
  }; 

  const Workouts = () => {
    return (
      <div className="bg-white  text-black p-4 rounded-lg  md:w-4/12 mt-10 ">
        <h2 className="text-xl font-bold mb-4">Workout Routine</h2>
        <div className="grid gap-4 ">
          {workOutInfoArray.map((workout, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-white shadow-md rounded-lg">
              <img src={workout.image} alt={workout.title} className="w-10 h-10 rounded-md" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{workout.title}</h3>
            <p className="text-sm" style={{ color: bodyPartColors[workout.bodyPart] || 'black'}}>{workout.bodyPart}</p>
              </div>
              <div className="bg-gray-700 text-white text-sm px-3 py-1 rounded-md">
                {workout.reps}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Workouts;
