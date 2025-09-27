// ===== KHỞI TẠO WEBSITE KHI TRANG ĐƯỢC TẢI =====
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Sinh Học đã được tải!");

  // Khởi tạo các chức năng
  initNavigation();
  initSupportForm();
  initAnimations();
});

// ===== XỬ LÝ ĐIỀU HƯỚNG MENU =====
function initNavigation() {
  // Lấy tất cả các liên kết menu
  const navLinks = document.querySelectorAll(".nav-link");

  // Thêm sự kiện click cho từng liên kết
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Lấy ID của section cần hiển thị từ href
      const targetId = this.getAttribute("href").substring(1);

      // Ẩn tất cả các section
      document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
      });

      // Hiển thị section được chọn
      document.getElementById(targetId).classList.add("active");

      // Cập nhật trạng thái active cho menu
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      // Cuộn lên đầu trang khi chuyển section
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
}

// ===== HIỆU ỨNG VÀ HOẠT ẢNH =====
function initAnimations() {
  // Hiệu ứng xuất hiện khi cuộn trang
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Áp dụng hiệu ứng cho các thẻ sinh học
  const bioCards = document.querySelectorAll(".bio-card");
  bioCards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });

  // Hiệu ứng cho nút CTA trên trang chủ
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      // Chuyển đến section Sinh Học khi click nút CTA
      document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
      });
      document.getElementById("biology").classList.add("active");

      // Cập nhật menu active
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      document.querySelector('a[href="#biology"]').classList.add("active");
    });
  }
}

// ===== THÊM HIỆU ỨNG CHO MENU KHI CUỘN =====
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background =
      "rgba(45, 90, 61, 0.95)"; /* Màu xanh lá đậm với độ trong suốt */
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background =
      "linear-gradient(135deg, #2d5a3d 0%, #3a7d5f 100%)";
    header.style.backdropFilter = "none";
  }
});

// ===== HÀM TIỆN ÍCH ĐỂ THÊM HIỆU ỨNG =====
// Hàm thêm hiệu ứng rung cho phần tử
function shakeElement(element) {
  element.style.transform = "translateX(5px)";
  setTimeout(() => {
    element.style.transform = "translateX(-5px)";
    setTimeout(() => {
      element.style.transform = "translateX(0)";
    }, 100);
  }, 100);
}

// Hàm thêm hiệu ứng pulse cho phần tử
function pulseElement(element) {
  element.style.transform = "scale(1.05)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 300);
}

// Thêm hiệu ứng khi click vào button
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    // Hiệu ứng nhấp nháy khi click
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});
