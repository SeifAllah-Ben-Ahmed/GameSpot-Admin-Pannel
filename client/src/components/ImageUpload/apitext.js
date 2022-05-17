import axios from 'axios';

export default async function apitext(product) {
  try {
    // const data = getFormData(product);
    const formData = new FormData();
    // formData.append('images', product.images);
    for (let i = 0; i < product.images.length; i++) {
      formData.append('images', product.images[i]);
    }
    for (let i = 0; i < product.Tags.length; i++) {
      formData.append('Tags', product.Tags[i]);
    }

    for (let i = 0; i < product.attributes.length; i++) {
      formData.append(
        `attributes[${i}][attributeName]`,
        product.attributes[i].attributeName
      );
      formData.append(
        `attributes[${i}][attributeValue]`,
        product.attributes[i].attributeValue
      );
    }

    formData.append('description', product.description);
    formData.append('imageCover', product.imageCover);
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('priceDiscount', product.priceDiscount);
    formData.append('SKU', product.SKU);
    formData.append('Published', product.Published);
    formData.append('IsFeatured', product.IsFeatured);
    formData.append('quantity', product.quantity);

    const res = await axios.post(
      'http://localhost:5000/api/products',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data);
  }
}

// function getFormData(object) {
//   const formData = new FormData();
//   Object.keys(object).forEach((key) => {
//     console.log(key, object[key]);
//     if (Array.isArray(object[key])) {
//       for (var i = 0; i < object[key].length; i++) {
//         if (typeof object[key][i] === 'object') {
//           Object.keys(object[key][i]).forEach((nestkey) => {
//             formData.append(key[nestkey], object[key][i]['attributeName']);
//           });
//           formData.append(
//             key['attributeValue'],
//             object[key][i]['attributeValue']
//           );
//         }
//         formData.append(key, object[key][i]);
//       }
//     } else {
//       formData.append(key, object[key]);
//     }
//   });
//   return formData;
// }
