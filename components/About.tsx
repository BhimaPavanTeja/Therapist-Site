import Image from "next/image";
export default function About() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-end">
            <div className="w-full md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4">About Dr. Serena Blake</h1>
                <p className="text-gray-700 mb-4 text-xl">
                    I am a licensed clinical psychologist with over 10 years of experience in the field of mental health. She specializes in cognitive behavioral therapy and mindfulness-based approaches to help clients overcome anxiety, depression, and relationship issues.
                </p>
                <p className="text-gray-700 text-xl">
                    I believes in a holistic approach to therapy, integrating evidence-based practices with compassion and understanding to support her clients on their journey to wellness.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center p-8">
                <Image
                    src="/SerenaBlake.jpg"
                    alt="Dr. Serena Blake"
                    className="rounded-lg shadow-lg object-cover"
                    height={400}
                    width={300}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
        </div>
    );
}