import OverlayCard from "../components/OverlayCard";

const OverlayCardList = ({ id, data }) => {
  return (
    <div className="g-layout g-layout--center g-layout--auto-fit-columns-lg g-4" id={id}>
      {data.map((course) => (
        <OverlayCard
          key={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
          tags={course.tags}
        />
      ))}
    </div>
  );
}

export default OverlayCardList;