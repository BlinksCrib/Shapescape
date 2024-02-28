import Button from "../../utlis/Button";

const Blog = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex jusitfy-center items-center w-[80%]">
          <div className="flex justify-between items-center">
            <h1>Our blog</h1>
            <Button write="Go to the blog" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
