export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About PostPluse
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to PostPluse! This platform was created as a modern blogging 
              solution where developers and writers can share their knowledge, experiences, 
              and insights with a global community. We believe in the power of sharing 
              knowledge and learning together.
            </p>

            <p>
              On this platform, you'll discover articles covering web development, 
              software engineering, programming tutorials, and tech insights. Whether you're 
              a beginner learning to code or an experienced developer looking to expand your 
              knowledge, there's something here for everyone.
            </p>

            <p>
              We encourage you to engage with our content by leaving comments on posts and 
              connecting with other readers. You can like comments, reply to discussions, 
              and be part of our growing community. Together, we can create a space where 
              everyone learns, grows, and inspires each other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
