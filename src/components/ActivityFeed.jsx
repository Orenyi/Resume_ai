import React from "react";
const activities = [
  {
    title: "Software Engineer Resume updated",
    time: "2 hours ago",
  },
  {
    title: "ATS Score improved to 91%",
    time: "5 hours ago",
  },
  {
    title: "New template selected",
    time: "Yesterday",
  },
];
const ActivityFeed = () => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadowsm">
      <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-b border-gray-100 pb-4 last:border-none"
          >
            <h4 className="font-medium text-black">{activity.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ActivityFeed;
