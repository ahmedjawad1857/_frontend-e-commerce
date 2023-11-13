"use client";
import Cards from "@/(components)/card";
import TopSalesCard from "@/(components)/topSalesCard";
import { Heading, Grid, GridItem } from "@chakra-ui/react";

import axios from "axios";
import { useState, useEffect } from "react";

export default function MenClothing() {
  useEffect(() => {
    gettingData();
  });
  const [allProducts, setAllProducts] = useState([]);
  const gettingData = async () => {
    try {
      const findedData = await axios.get("http://localhost:8020/get");
      const finded = findedData.data.findedData;
      const filteredData = finded.filter(
        (item: any) => item.category == "mensClothing"
      );
      console.log("filtered Data", filteredData);
      console.log("finded Data", findedData.data.findedData);
      setAllProducts(filteredData);
    } catch (e) {
      console.log("getting error", e);
    }
  };

  return (
    <>
      <Heading textAlign={"center"}>
        Welcome to our <b>Men's Clothing</b> section
      </Heading>
      <Heading>Top Sales</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} key="index">
        <GridItem>
          <TopSalesCard image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhUYGBgYGBgYGBgYGBgYGBgYGhoZGhkYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzErISs0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAACAQIEAgYHBQYFAwUAAAABAgADEQQSITEFQQYiUWFxkQcTMoGhscEUQlJy0SNigpKi8BVTssLhJDNDFjRz4vH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAgICAwEAAAAAAAAAAQIRAyESMSJBBDIjYaET/9oADAMBAAIRAxEAPwDYBIoJHvVxWSTpHkOlJNoyiySBK0k0VibR0rCtFozbDQw6ewhuNIKXsiOFRkQrRREFpSRCE3KKtCflGCXEbIjrCJtAWEARQEMCKAgILkYtdok7GLXaANuIyVklhGysIVjE4mn+3qfmHyEW6STXp/tqn5h8hDenK2zkVzU4JLZIIltflh2hAw5CxgR5YyseEAEFoILwBqsNDBQ9kQYhtDpDoeyIQUu0K0VAYwTENuIomJbcRkEO0O0O0ATaACLKwhAEONDFINBCfYxS7CAGREZY5BaAZitT/av+YfIQ6iR+oP2j/mHyEVUWLZaVzU4I9UEOGxpoQIdoYEBEShLHQI2ojwEDACGBAIYgRquuhhUV6oiq2xgpeyI4CiJT8e49TwoGe5dwxRBzy2uSfujUa/OXJnMuK8N+2cVro7lEpoiraxJuitbwu7Qt1Nqwx8stIWN6aYksStRUueqiohA15lwSf+OUveivTBq9RaNdUDuCabpcB7AsVZT7JtexvY5TtpeO/o2psbmu234PrfxlbxHowMG9CqlV2K4miOsFtZnUaAe8e+Zzkm9N8uG+NrqUUBABDE1cooAIDAzAQBLDQxSjSIquAN4weJUxu4gEuE20qq3HUG1zItXpAOSecAUR13/N9BHGEqqfErFmZbljfSKqcaQaFTEaVUWCRRxJG7fKCBNVeCc5w/Fq/wDmGWuG4lWP3/hJ2e2wEdzTFVuP1KZBY3W9jpJJ6WrbQExhrM0AMx//AKxHNPjHafTNCQuXUm24gbUVjoYVJtBKLFdI6aggkXttfWQKXTBCQioxOwjS195lq2DYY6pVVdWoqADzdCLG/YQQPcZCxPTHKxQjKRoZDPS4XDk5su9hrl5/Q+6RnLZ014cpMu19gqmPJf1q0kXI5QKrFs4Gma7bX7POUmLweLZb4h0Zc1J0ICizrURxYDlpzOvdJHEuMviEVqNQIlrZ1LM7F0tlKqDkALcxuOUrsVx52KYc5GdAXqFCbJTppnLtfY6ba8u2c8luWo9DKyYbraNxtABe9/DSKfi1Nd3UX75nc16QbfSVTuCNhOuPJtrXVOP0gNGLeEitx9DsuveZmvVAoXvtGEMYl20+I4yzCwyi8a4ZRDMb69UyiAlv0YrKzuAb2QxUQwq6Qishmt+9Ceq1rg3gaYFkfEqLiMJiWtvGsRWbMsWjiZaFI5rGCB9GMM0uMM+koaBMuMId5I0q+k7nItjbrCVq3A3MsOkaMwUBSesNBIBRgNUIjXj6NuoPbFYHDr61N/bX5wgBc7jSOcOZfWIb7MIGmcZp2xLC/Nf9IjuAp/8AUoOV/oYnirg4kkG9yvyAk7h1L/qUOlrn5GOIynat4rRH2ipcgDMd9thzkHh+KpeupUxd2erTSw0Wzuq3JO+/KV2MxZrO1Q7uS1uy+wHgLCX3o44OKmNV263qlNS/LMCFQeZv/DOycExx8qzmW7qJWP6KOHc0KxonMwqJa6k8nWx0DCzW/e0tJI6PLguH4quxLVatP1edvay1GCDwvmvbsAnQcRwjPma9nIOtiRa9wp7QJQekVHXAtc2DVKfV7LG+h905ePD59urPOXDr25TheK4iioRKrBPwmzrpyAYGw8LSww/SZx/3KSuO1LqfI3B+EqmUab9/0tE1KwAnbcMb7jl7aLB8RSqropZW9vI2+XTsJHMecazOOZmb4biAlVXJtqb2HJgQb67C4O3KadHvfbecmePjelTo/gXvozNm5dnfeXPR5Ep1XyBhdDuefdKjAMl7s4BvottxLnhdWm1RwhJCoeXnIp9MywbtPnI4xLrs/wAZNqLcSA9IQ2WMlPJxIruQY83FVcjQ6Srel3w8Og08YquYxeJiw0EhUdPMwRDUWWHzS1oKZW4fEp+MSzoYlD98ecQ2quP4pkUEb5pVNjHYb6yf0ocZAQQdZS06+m0Dno6lRyxuL+Aj3Dz+0S66ZhJOFqDLtFcOZTVQfviPatJGPA+06AWBHyljglvXBFr3PPujGPpj7QbfiHyEaZ/V1nf8CO9vy02P0jk2jK9sbgjca20007p1v0S4QCnXq21Z1p+5FDm3vqfCcj4Y1y2mzX87f8ztfoyYDAg9tSoT/Nl/2zv5sv42WE+TZIBMR6V2tg0HbXQf0VD9JtR/fP5zAell7YamvbiF5W2p1Zy8f7Rrl6ckrVALX7/7+MrsTXudv+ZLxC5msWCgAb3J8ABudpXYzKCMt9N78++3LnN88voscetl2YbgjyYn+H/8mv4JiM9EjLcqbMSLG9gb+UyNNwOxT2hSfkfpL7oxjsjsmYFXW21iGW7Lpy0zD3yMpuFVhRTrg2l30MXr1ydeo31lfS9oS96JJrX/ACN9ZzbPSgJNvdK6oDLspoPCQq9MR2pxime9jF4QdYX01jroImggzi+3OG1yJqKBzv1jr5wRuq41y7E6QSQ0FLBU/wAAkpeH07ezGkW0lI2giFrOdKaKoikb3meo4tQJoOmdMuqKu5aUNDo/Wb7vxjOWaWWFxSkWvJXCWU10/OI1geilfsHnLrhnReqlRHYrZWuYSC5QWPcfamW+uYfISr6T4nJn3u4yXFtARrpcX2t75o8RwJzXavmFs17e4TH9LmDVSLnqjkeZ1P0m3Fhu/wCs8sptRcIqdZ9LXUHyP/M7X6NLjCIDpdnKm+4Zj/fwnFOHqBmP4jb+UEn5jyna/R6hTDJpcFQ5XfRhcOp5jWx5ggg8jN8t+HZz22WVuRtfmBr712985/6V83qKILE/tr2IAsfVvr37zoatax8j2j9Zzj0xOfU0t/bYC+huUI+sy4/2PL05DWa9z2m/u5fC0ilb3kx02EafsE1ymylGaTU1Q6EOgYZrZe8a8xp5iOU6moYFcy6rZrWI2spaXT16bYWimUM1gTcA5coy+ZPylPibaADW+gAG/K0nGXx3S3utXRxQORh94Aj3i80XRVwPX/kP1mPwvUWmhNyosT8bDuG3umo6MOCuJI/yz8jOXS6jVD1RbslVUqXk+g5Ka9kqXTmI7E4UWSIBswimqX5RCC7CS0hp6mg8TBHWojTxMENhtAkVEgxRMTOqDpO1jSP7/wCsveHDMszXS1rer/PNLwltFPaBLxTl6i7wyGS6hsInDpfaCswKEggjtEqiRFZ7ofEzknGMTnd2/ExI8CdJ03F1MtB20v7K3NhmYhV15dYiVTejEuC32sezyokgX/jmvHnjjL5UY4ZZXcjnK6BAO4n+LX5ET0D0NwyphqartlDr3Z+sVF+Vy2n5hOTcR6IYnDB6o9VVRVcqysGa2UgFUOoZfauL2K3vpNn0d6Wv6pR9mFrD/wAhGul7AJoLjblFycuGpJW/Hwcl3qOkKLDTxt9V/T+zzj0wpenh8u2dnNyALBLczqbsugl1humisdaD6PkJRkIzXAPtMulzCXjtPFNkpqxAQsbgXsSoy5G0Ya6i/LwmUzmN2r/llfccKZCbsASoNiwBKg9hba8NKVxc6C2h5nu7p31MSlNMuYflCerVe7JyM5z074ZTAfEUbKtwKiAaXP3xb2dSLjvv464fk45ZavRZ8GUx3GJZ8o0sANBJOBw5H7Rx1j7A7B2+J+XjE8PwoZ8rKS9syJ4W1ccjroN9CSNr2bYKqXAKG1x2Q5c99RnjJPaLQY5xNL0PchcVf/Lb5NGMZw5EdlSmxawZWBNrZVJJDH2bk6x7ozQdUxNxa6EDUdh7DMIMukX15Ce6VdDFaG8sxgnsdRa21xK9MA4U3KD3n6COox9I7YtYdHFDNbukc8PP41/q/SOU8DrfPy5KYtNdxJGIGnvhRg4D98j+H/7QRaLcbSm5kpW0lUtNvxmOojfjMbJW9KLHJcA9aX3CWui6chM/0hwrkIb5tZd8EvkF5WIvpsOEvcHuRvlI3R/CA4Wnck3W5udbkkw+GV0RrFtXVhaxIHiZN4dTVKKorh8gClgLAmK3tcnxiNjOD03otTbNlYHUGzA3uGU8iCAR4Rjh+KfDqqPUD36gdlsWNiQCoOpsDtvY7S5I6swPpIbJRp3Nv2mcZTZroptl7Ddl1h4+XSsM/GpPS6rTTCslMU0OIYC1JKdMOoILlgjEtoAOsQNeekxH2ionsFgOxXZT5bGV1Xj+IxFVTWfNYMFAVVAva56oFycu5k01D3GdP43HPG77p8vJbfj0fwfHKi6KxNnzlHCm7ZsxvoDYnsMdXpG9NldaSMyEnrlnuCCGBDDcg78jrrK2u4PtI3jYHyIMj1Ki7XP8QsZWXBx5d2TacebknUtari/TpWFsOjFrDM9WwCk65VRTqBqN7ac5h8XXqVGLO7MWNzc6abaDQbnzjtRMpzD3+EDU/wDiZTgxx9Ky5csvZHC6mSqj8gwB8G6p+BM27kluehEwdROXM6W5+E6ZgusqM62uFLA6EEgXB7Is8dM7kVj6nXYcvULb+ZZH4PpTra/dMt+JPhvV2yk1/VAE3cC2bS33eyVPB8M/q6hynVdO+Z4+hmjvcLe+wkfHKASRoGVXA7M6hiB3AkiXuG4bndEfMqFSWYWuLAnn4R/E4DA3yviHBQKhA5ZRYX6m/bHYjGsI99dY9Sc6r2gXlj0h4YKFQqpJUkhb72AW9yO8nykBKXXKhhtvy2iXKUo+UOGo0hQJoRHUXWLw6qdxylo6UkyKadyUVicxGpkprL9Kb5Etf2uXhJ/AHui37BB0uprkpFepmDEgm/dGeAmyAXvbS4lRV/Vs+FD2vyN8ovgX/taX5BGOFHRz+43yjnAzbDU/yL8or7PH1FizdWY3pL0ZfG1KeZ8lKmGJNszMzlQAoOg0Xfv2mrSrm6u28c9WT964008N7Qh+qwGK6KYahh6rIhZ0RiHdizDLqSB7I0B2AmPvOw4+guW1tHDAgm+hFvrOOMhW4O40PiNDOn8a3VhZ96puvVI2A/mZfjqJV4nEksAwI7e3xvzljVMr6428Zpyb17LHR+mdO0QKrDQAW5EnaIpLaSGaOeiq56PYUZGewL58ubnbKpsOzczQAsNyBKjgi/sAfxVHv7ggEnZbsAe0Tlz/AGos2exVS1U91NT/AFCTaGbI2W5GT7u28LH4Vftjpbq+rA38DvJuCphEbrjqqFsNjzvIno77K4E7FyPwqTr4bTO4Xh9avd1RnzP1iLe0dTe+281PB0UOAHDF8w94Un/dH8HwaslNqecIWcOGQnbKQwO3dHtMjK9M6gOIyjXKLt3M1tPIL8ZQoN50PiHAqT1GqVFcl3AXIwAtlUC/vBlPj+CIlUIisqlLnMbkEMw3HLqiFhysurGCXWIwdBN3PgNYcQ21dPo0V+/8JMr8EzsrF7WVVtbsi06QUTs0dXjFM/ek9HtW8a6OGuqLmACAjbe8jYDos1IZQ9xLWv0gop7T2vtCo9IaD7PeMvo5hMM9O5upQI11tqfE+6P8NVqlJHsqh1DKqiwUEaCEuOR1cKb2Rj8IOBYpRhqP/wAafIRfbSXqHBg8tyTpE02UEWHaLnlH6+MVlIBkJXXkY5Sy7Fi6eq2PaT3X7JyXpDSyYmqn75b+frj/AFTqnrrm5M5x07pWxIYbOg/mUkH4ZZrwZfKjOfGM+40i+EcL+0VGQbrTqOO9lFl/qZT7o27aTRej9b16jcxRI/mdD/tnRyXpEZVDpFGTuNYf1eIqpyDsR3K3WUeTCQGj30Gz6L4TPhlN/vv/ALf0lm2AAdcxsucX8L6ys6M4lVwyC+udz/VLqpilbnOXL3S+0/itTDrUchSa2QZQC2xK7j2ZBwrMUcsut7Dl5yuxmJti2bspj5iWOFx91fbkdu2TPSsr2k4TAZyyKArgh1uSAbizaj3SywmCZDZqgzk3sG1AAIFgdxqT7hKk4m5zA2PaNJKpZ2em4DsLLdrE/ea9z4RQqsnIemVQudVVXI0DKRZtbaAjcCZvpGKiFRmzPk1YaX67625b7RyjxUU6zhiStmTKD2aC3ZqN++Qq2K9azEtck+Wuw7pSWfamx1IhyZiUIO8ElXS3RbfcMk0alza1prV4YnZHU4WnZJNz3jlJmKhVvGOGYVwdUtOlPw1L3yiKXhqfhgO9aZvhNIgPewLo4UXFzy2lhw2nlpIhtmRFVgDexsJNxuBREdwtmynXnsY9wLCJ6imbasisx5liBcntMPtc9RXKpvtE27pfthV7IHwa9kBazSp3TJ9PqShKT21zupNu1QQO72T5GdNbBrMX6S0CYZCALmsoBN7L1KhJNhqNLe+acXWUTldxyzE9xN5pvRsSK1Uj/KA/rH6TMVSe0DxBA+I2m69F+BLHEOduog7yMzNr4MnmJvy340ooOnOmMYkWzojfAp/slATNt6VMGqGg4brEOtuZUZDf3E/1TAK5ixz+M2cx26F0QRDhkLLch3B0GvWvp529xlrjMn3U59kLoNwq+DQsti7O/LUFiFPkBNH/AIEp1IJmeWU2zsu2Ux1MHHsFHVyDT3LH61K2fbXsk37LSXE58zGoVChAVJIawvltewHPlLStwcG+4vM5YvKVS8JpBnCsNLTRVUVEsot4SLg+GZHDDlLGu4Kx9Jm2QxNWxc5L3AYHxGvxvKWloW0I7Jq6lC6nxPle/wBTK98MNdoBm67M2wMEu2pqOYgl7hadPVY4omX/AMXrj8Hkf1i6fGqt7EoPd/zMmuq0pENRMtX4xVGudAO/L+sXhuMuwJ9YmmmgU3+OkBqrnjf/AGX8D8jG+jS/9LR/IJXPindSrEMCCNLdkYwlWtSRUQ2VRYA2OnjDR/TUuIorMr/iuIG5U+6OJx+rexRT4R+NS0TrMZ6TKf8A0gOtxVQj3q4+stB0hbdqRtKPpxxEVsE4CEFWRvJwD8CZeHWUKuVuLdvmw+GadH9FR/YVlvtVuBpoGROQ71M5yxm39F+MVHxCubArSI0vqC4PzE35Z8aUVfpXqn7Uiclogjxd3v8A6BMSpmu9KFcPjrqbgUqY8NXax/m+Mq+hmBFbG0EPshw7dmWn19e4lQPfMZ6aTqO2cC4c1GhSpG10pop/MFGb43lmyt2fKKp2PMH3iPBZne2bneBcDiAJIvkIAO5OUaeQvNwjMdx8JguGOG4mn5j8KbTpQW0UXl7RbC20r+I0AUNt5diMYs9QxpZT/D3YacpCrcKqZSMut+2axattMg2veRTxROweUCZP/CKn4YJrf8Qpnl84IBzUdEsZ+IfztHsP0Pxea5K8/vmdVAH9iKAEjdb9OVVuhWKdrkoL9rE/SS8F0NxKI6hkJZlO5Hs+6dK0hgCG6NRzrCcNx1IP1CezKwIv5ywx+OrLT1R1bINQhPW0uPnNtkhMsrdT4xyX/GcQD7ZXxGw8DJlHj9YXuyNcc1Gh93vnR6mGVtGUHxAMg1eA4dt6Se5cp+EfkNMlS6QPsyodbcxD4hxX1iVKBpDrqyBgw3IIBF++xmiforhtbIR4M31kOt0PT7tRx4gMPpCZQvGuPhpqOguJRHrZ76qlrC+xe9/MSi4tgzRq1KZ+47LftAJyn3ix98seieFerWZEAu1N9CbbFPoTOvPvDbOe1L0oxWfFVmAIGYBb6GyqqjT3A++aH0c4IM1aoSAVVUW5A9oln/0r5xHHBRqqUqU3StQshqJlbMPw1FJHskkb8t+ULhNIJSsoawdrkjnfmRpewE5ceSZdfboz47jN/TevhXXZx5g/KBHqKdGb3EiY5MUwOjm19RcxxeJvcHOTYnnKY6X9bBlK/rkurDLb2dLC29udzeWdPjOIG738VX9JjX41WI9s9uoUj4iEvG6osAQb9o/SLUF7bdekdUbhT4r+hhv0ldhYov8AUJjF48wPWRWv2aEanz0tHG44ovdDprofD9Yag01qdIQN05W0b9RKxsat75TvfkZRrxtD90j4iLTidEi+YeTj6bxahaaCljqfPMP4f0hSjGNpHZl/mEEPEadHVjHVMgJiJIWtM2yQYAYw9aElaAShaBdBGhUilaAKLf3aJLHuh3ibwAZj2QtTCLRKv3GAck6fUCmOqN+NUe3L2Ah+KExPQavbH0QBbMKiH302YfFRNN02wCMVxDhs4AQJmCoyqWY3IuxPWte43GkicBxuGpYlE+zIGLKEqqWzKT1Nc7Mba8j3TbLnxmMx+9HjwZZS5z1Gd4uh9binv7dapr3ZyLDtmy9HFXNSrL2VA2wscyAbfwzLswC4qg6dekzm5sDYFjmudwbE27NZovRihFGq/J3VRyvkB1H8/wAJxYTKZdu7m8LxSz+mtr8PpP7aI3ioMrq3RnDN/wCPL+VmH1lyaw7In1o7Z0PPZWv0MoH2alRezVWHykGr0MYG6VgfzIR8QTNuwHaInL3fCG6NRzmv0VxIOmR9eTEHyYCRcXwLEKf+yxFhqtm1AF9jOnMnd8BEMnd9I/Kjxjkx4dVX2qbr2XUj5wvstULbKwW98pIHvK37Dv3zrJT935RirhEcWZEP5lUx+Racq+y1PwPzFrQp01+DUT/419wtCh5DS2Sj4R5acJCp5/rH1SY9tbDXqoa0/CPhRAad/vGGqXRCJ3xap3xa0D23gVCIao6JyQFe6OZIAkfZdI7UogpaSykLJH2Tl/THjWZyqXPqwxymymwIDsc29yLADcL4ygw3EAzq5S7XUWOZLknTLcamwJ07J0vE9C8M7s/XUsSTkqOoJOpv+kk8M6M4egxdE65FixLMbb7XsPKT4ze66JzZTHxnpSdJOiIxFQ1adU03ZCjnJmDqRl1FxrbS/ZaXfBOEjD0UpIbhFtcgAk8ye+8uPV+EUi90pjb1pH9T3fKF6rukonvgB740ozprt/flEqmhktxEgCAQyh/u8SRJrKI2QOyIIZQdkQVWS3A7I2VHZ56QCMbQRxlghs0z1YjiabHz1hhhFh4HaQa37vl+kNMSvYR4qYpjG3pg8oEkowOxipX/AGUbj+/KKu42I8zAJ14VpCOMZfaW/hf9I4mPQ6E5T36fGMkkiJsYFqg7WPgbw8/hAGXJib9t4bsbwlOsDAtDR4loaLEBlu+ETDtbl8IYYRkBeGHMN274QMAS0FoRMF4ARWFlhM8bzxAplH9iCNs47PiYIGUscHKCCKHSxFQQRpOLtDEKCACogPKQcXSUW0HKCCMCpbx3ORzggiMYaOU94IIQDaEsOCMhwAQQQA2iYIIAgxEEEAAjb7QQRGj1YIIIB//Z" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="data:image/jpeg;base64,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" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="https://i.pinimg.com/236x/f2/b6/79/f2b679b3ef9a0df4e341b671ebdd9d1d.jpg" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="data:image/jpeg;base64,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" />
        </GridItem>
        
      </Grid>
      <Cards product={allProducts} text="Men's Clothing" />
    </>
  );
}
