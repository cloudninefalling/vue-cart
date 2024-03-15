import { createStore } from "vuex";
import imgBxc from "./assets/BXC.png";
import imgG2h from "./assets/G2H.png";
import imgGhn from "./assets/GHN.png";
import imgTda from "./assets/TDA.png";

export default createStore({
  state() {
    return {
      cart: {
        items: [
          {
            name: "Вытяжное устройство G2H",
            specs: [
              "12-72/168 м3/ч",
              "гидрорегулируемый расход",
              "от датчика присутствия",
            ],
            article: "G2H1065",
            price: 12644,
            image: imgG2h,
            amount: 1,
          },
          {
            name: "Вытяжное устройство BXC",
            specs: [
              "12-72/168 м3/ч",
              "гидрорегулируемый расход",
              "от датчика присутствия",
            ],
            article: "G2H1065",
            price: 12644,
            image: imgBxc,
            amount: 2,
          },
          {
            name: "Вытяжное устройство GHN",
            specs: [
              "12-72/168 м3/ч",
              "гидрорегулируемый расход",
              "от датчика присутствия",
            ],
            article: "G2H1065",
            price: 12644,
            image: imgGhn,
            amount: 1,
          },
        ],
        isSetupNeeded: false,
      },
      catalog: [
        {
          name: "Вытяжное устройство BXC",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgBxc,
          description:
            "Вытяжное устройство для механической системы вентиляции",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
        {
          name: "Вытяжное устройство G2H",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgG2h,
          description:
            "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
        {
          name: "Вытяжное устройство GHN",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgGhn,
          description: "Вытяжное устройство с датчиком присутствия",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
        {
          name: "Вытяжное устройство TDA",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgTda,
          description: "Вытяжное устройство с датчиком присутствия",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
        {
          name: "Вытяжное устройство TEST",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgTda,
          description: "Вытяжное устройство с датчиком присутствия",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
        {
          name: "Вытяжное устройство TEST2",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgTda,
          description: "Вытяжное устройство с датчиком присутствия",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
        {
          name: "Вытяжное устройство TEST3",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgTda,
          description: "Вытяжное устройство с датчиком присутствия",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
        {
          name: "Вытяжное устройство TEST4",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgTda,
          description: "Вытяжное устройство с датчиком присутствия",
          priceRange: {
            rub: [6848, 56584],
            euro: [77.6, 643.86],
          },
        },
      ],
    };
  },
  getters: {
    catalog: (state) => {
      return state.catalog;
    },
    cartTotal: (state) => {
      if (!state.cart.items.length) return 0;
      return state.cart.items.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      );
    },
    cartCount: (state) => {
      if (!state.cart.items.length) return 0;
      return state.cart.items.reduce((acc, item) => acc + item.amount, 0);
    },
  },
  mutations: {
    addToCart(state, item) {
      const existingItemIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItemIndex !== -1) {
        state.cart.items[existingItemIndex].amount++;
      } else {
        state.cart.items.push({ ...item, amount: 1 });
      }
    },
    removeOneFromCart(state, item) {
      if (item.amount > 1) {
        item.amount--;
        return;
      }
      state.cart.items = state.cart.items.filter(
        (cartItem) => cartItem.name !== item.name
      );
    },
    removeFromCart(state, item) {
      state.cart.items = state.cart.items.filter(
        (cartItem) => cartItem.name !== item.name
      );
    },
    clearCart(state) {
      state.cart.items = [];
    },
    toggleIsSetupNeeded(state) {
      state.cart.isSetupNeeded = !state.cart.isSetupNeeded;
    },
  },
});
