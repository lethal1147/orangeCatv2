import { FeatureCardInfo } from "../types";
import activity from "../asset/home-tracker.jpg";
import rank from "../asset/home-rank.jpg";
import challenge from "../asset/home-challengeFriendSmall.jpg";
import achievement from "../asset/home-achievement.jpg";
import statistics from "../asset/home-statistic.jpg";
import leaderboard from "../asset/home-leaderboard.jpg";
import getStart from "../asset/home-register.png";
import workout from "../asset/home-workout.png";
import connect from "../asset/home-ranking.png";

export const features: FeatureCardInfo[] = [
  {
    img: activity,
    name: "Activity Tracking",
    desc: "Easily track your workouts with our user-friendly interface. Set goals and monitor your progress towards them.",
  },
  {
    img: rank,
    name: "Rank System",
    desc: "Climb the ranks by completing workouts and earn badges and rewards along the way. Complete against other users and see where you stand on our leaderboard.",
  },
  {
    img: challenge,
    name: "Challenge friends",
    desc: "Invite your friends to workout challenges and see who can achieve their goals first. Stay motivated and accountable with friendly competition.",
  },
  {
    img: achievement,
    name: "Achievements",
    desc: "Earn achievements by completing challenges and hitting milestones. Celebrate your progress and stay motivated to reach new heights.",
  },
  {
    img: statistics,
    name: "Statistics",
    desc: "View detailed charts and graphs of your progress over time. Identify areas for improvement and track your growth.",
  },
  {
    img: leaderboard,
    name: "Leaderboard",
    desc: "See where you stand compared to other users on our leaderboard. Climb the ranks and complete for the top spot.",
  },
];

export const howItWork = [
  {
    img: getStart,
    name: "01 Get Start!",
    desc: "Sign up and set your fitness goals!",
  },
  {
    img: workout,
    name: "02 Workout!",
    desc: "Track your activities and view your progress statistics!",
  },
  {
    img: connect,
    name: "03 Connect!",
    desc: "Connect with friends, climb the leaderboard to stay motivated!",
  },
];
