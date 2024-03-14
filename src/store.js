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
            amount: 1,
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
          name: "Вытяжное устройство G2H",
          specs: [
            "12-72/168 м3/ч",
            "гидрорегулируемый расход",
            "от датчика присутствия",
          ],
          article: "G2H1065",
          price: 12644,
          image: imgG2h,
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
        },
      ],
    };
  },
  getters: {
    cartTotal: (state) => {
      if (!state.cart.items.length) return 0;
      return state.cart.items.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      );
    },
    cartCount: (state) => {
      return state.cart.items.length ? state.cart.items.length : 0;
    },
  },
  mutations: {
    addToCart(state, item) {
      if (state.cart.items.includes(item)) {
        state.cart.items.item.amount++;
        return;
      }
      state.cart.items.push({ ...item, amount: 1 });
    },
    removeOneFromCart(state, item) {
      if (item.amount > 1) {
        item.amount--;
        return;
      }
      state.cart.items = state.cart.items.filter(
        (cartItem) => cartItem !== item
      );
    },
    removeFromCart(state, item) {
      console.log(item);
      state.cart = state.cart.items.filter((cartItem) => {
        console.log(cartItem);
        return cartItem.name !== item.name;
      });
    },
    clearCart(state) {
      state.cart.items = [];
    },
    toggleIsSetupNeeded(state) {
      state.cart.isSetupNeeded = !state.cart.isSetupNeeded;
    },
  },
});
