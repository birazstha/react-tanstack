export default function EventDetail(params) {
  return (
    <div className="mx-auto w-[1200px] text-white">
      <div className="flex justify-between">
        <h1 className=" mb-2">Event Title</h1>
        <div className="flex gap-2">
          <a href="d" className="no-underline text-white">
            Delete
          </a>
          <a href="d" className="no-underline text-white">
            Edit
          </a>
        </div>
      </div>
      <div className=" h-[450px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nihil, sequi saepe recusandae adipisci eligendi! Veniam molestias
          laboriosam excepturi suscipit doloremque doloribus, itaque molestiae
          totam ipsam expedita similique perspiciatis exercitationem rerum sint
          culpa dicta saepe ullam temporibus sequi repellendus, alias natus enim
          corrupti. Doloribus a explicabo magni fugit voluptatem laboriosam quo
          beatae ex saepe recusandae dolorem perspiciatis animi dolores, quas
          earum. Excepturi eius exercitationem aperiam cupiditate ad? Adipisci
          iure distinctio voluptatem autem impedit quas libero consectetur
          voluptatibus possimus et ipsum, enim fuga itaque animi perferendis
          recusandae aperiam aliquam accusantium maiores minima velit labore
          alias obcaecati reprehenderit? Magni, recusandae! Consectetur,
          praesentium.
        </p>

        <p>Date: Kathmandu</p>
        <p>Location: Kathmandu</p>
      </div>
    </div>
  );
}
