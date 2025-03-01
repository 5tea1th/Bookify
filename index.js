const books = [
    {
      title: "English",
      author: "Ravi Sharma",
      genre: "Fiction",
      price: 599,
      description: "A great fiction book.",
    },
    {
      title: "Science",
      author: "Meera Nair",
      genre: "Science",
      price: 799,
      description: "A science book.",
    },
    {
      title: "Chemistry",
      author: "Amit Verma",
      genre: "Mystery",
      price: 699,
      description: "A mystery novel.",
    },
    {
      title: "Mathematics",
      author: "Siddharth Sen",
      genre: "Education",
      price: 749,
      description: "An advanced mathematics guide.",
    },
    {
      title: "History",
      author: "Anjali Mishra",
      genre: "History",
      price: 650,
      description: "A deep dive into world history.",
    },
    {
      title: "Physics",
      author: "Rajesh Iyer",
      genre: "Science",
      price: 850,
      description: "Understand the laws of physics.",
    },
    {
      title: "Artificial Intelligence",
      author: "Dr. Neha Kapoor",
      genre: "Technology",
      price: 999,
      description: "The future of AI and machine learning.",
    },
    {
      title: "Psychology",
      author: "Vikram Das",
      genre: "Self-Help",
      price: 725,
      description: "Explore the workings of the human mind.",
    },
    {
      title: "Programming in C",
      author: "Harish Gupta",
      genre: "Technology",
      price: 899,
      description: "Learn C programming from basics to advanced.",
    },
  ];
  
  const cart = [];
  
  function displayBooks(bookArray = books) {
    const bookList = document.querySelector(".book-list");
    bookList.innerHTML = "";
    bookArray.forEach((book) => {
      bookList.innerHTML += `
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
              <p class="card-text"><strong>Genre:</strong> ${book.genre}</p>
              <p class="card-text"><strong>Price:</strong> ₹${book.price}</p>
              <p class="card-text">${book.description}</p>
              <button class="btn btn-primary w-100" onclick="addToCart('${book.title}')">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  function addToCart(title) {
    const book = books.find((b) => b.title === title);
    if (book) {
      const existingItem = cart.find((item) => item.title === book.title);
      if (existingItem) {
        existingItem.qty++;
      } else {
        cart.push({ ...book, qty: 1 });
      }
      displayCart();
      alert(`${book.title} added to cart!`);
    }
  }
  
  function displayCart() {
    const cartList = document.querySelector(".cart-list");
    cartList.innerHTML = "";
    if (cart.length === 0) {
      cartList.innerHTML =
        "<h4 class='text-center text-muted'>Your cart is empty.</h4>";
      return;
    }
    cart.forEach((book, index) => {
      cartList.innerHTML += `
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
              <p class="card-text"><strong>Genre:</strong> ${book.genre}</p>
              <p class="card-text"><strong>Price:</strong> ₹${book.price}</p>
              <p class="card-text"><strong>Quantity:</strong> ${book.qty}</p>
              <button class="btn btn-success" onclick="increaseQty(${index})">+</button>
              <button class="btn btn-warning" onclick="decreaseQty(${index})">-</button>
              <button class="btn btn-danger w-100 mt-2" onclick="removeFromCart(${index})">Remove</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  function increaseQty(index) {
    cart[index].qty++;
    displayCart();
  }
  
  function decreaseQty(index) {
    if (cart[index].qty > 1) {
      cart[index].qty--;
    } else {
      cart.splice(index, 1);
    }
    displayCart();
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
  }
  
  function clearCart() {
    cart.length = 0;
    displayCart();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
    displayCart();
  });
  function searchBooks() {
    const query = document
      .querySelector("#search-box")
      .value.trim()
      .toLowerCase();
    const filteredBooks = books.filter(
      (book) => book.title.toLowerCase() === query
    );
    displayBooks(filteredBooks);
  }