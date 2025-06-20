import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 110,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 6,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});
//-----------------------------------------------------------

export const notifications = atom({
  key: "notifications",
  default: selector({
    key: "notificationSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notificationCount = get(notifications);

    return (
      notificationCount.network +
      notificationCount.job +
      notificationCount.messaging +
      notificationCount.notifications
    );
  },
});
//-------------------------------------------------------------

const TODOS = [
  {
    id: 1,
    title: "go to gym",
    description: "bla vla bla",
  },
  {
    id: 2,
    title: "go to store",
    description: "bla vla bla",
  },
  {
    id: 3,
    title: "eat lunch",
    description: "bla vla bla",
  },
  {
    id: 4,
    title: "wash your clothes",
    description: "bla vla bla",
  },
];

export const todosAtoms = atomFamily({
  key: "TodoAtoms",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});
//-----------------------------------------------------------
export const todosSelectorFamily = atomFamily({
  key: "todosSelectorFamily",
  default: selectorFamily({
    key: "todoSelector",
    get: (id) => async () => {
      const res = await axios.get(
        `https://sum-server.100xdevs.com/todo?id=${id}`
      );
      return res.data.todo;
    },
  }),
});
