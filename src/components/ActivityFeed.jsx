import React from "react";
import useResumeActivity from "../hooks/useResumeActivity";

const ActivityFeed = () => {
  const { activities, loading } = useResumeActivity();

  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-6">Recent Activity</h3>

      <div className="space-y-5">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : activities.length === 0 ? (
          <p className="text-gray-500">No recent activity</p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="border-b border-gray-100 pb-4 last:border-none"
            >
              <h4 className="font-medium text-black">{activity.title}</h4>

              <p className="text-sm text-gray-500 mt-1">{activity.action}</p>

              <p className="text-xs text-gray-400 mt-2">
                {new Date(activity.created_at).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ActivityFeed;
