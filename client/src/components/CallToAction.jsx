import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to share your story?</h2>
        <p className="text-gray-500 my-2">
          Join our community of writers and developers sharing knowledge
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="/search"
          >
            Browse Articles
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=350&fit=crop" 
          alt="Writing and blogging"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
